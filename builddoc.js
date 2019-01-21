const fs = require("fs");
const path = require("path");
const reactDocs = require("react-docgen");
// The React components to load
const componentFolder = "./components/";
// Where the JSON file ends up
const componentJsonPath = "./docs/components.md";

const hb = require('handlebars')
hb.registerHelper('json', function(context) {
    return JSON.stringify(context)
})
hb.registerHelper('replace', function(find,replace, options){
    var string = options.fn(this);
    return string.replace(find, replace);
})

const mdTemplate = `
{{# each comparray}}

## {{this.filename}}

{{#if description}}{{{description}}}{{/if}}
 
prop | type | default |  description |
---- | :----: | :-------: | ----------- |
{{#each this.props}}
{{@key}} | \`{{this.type.name}}\` | \`{{{json this.defaultValue.value }}}\` | {{#replace "\n" " "}}{{{ this.description }}}{{/replace}} |
{{/each}}

{{/each}}
`;

var template = hb.compile(mdTemplate);

// var result = template(data);


const componentDataArray = [];
function pushComponent(component) {
    componentDataArray.push(component);
}

function createComponentFile() {
    const componentJsonArray = JSON.stringify(componentDataArray, null, 2);
  console.log(JSON.parse(componentJsonArray)[0]);
  const mkdown = template({ comparray: JSON.parse(componentJsonArray) })
  console.log(mkdown);
    
  fs.writeFile(componentJsonPath, mkdown, "utf8", (err, data) => {
        if (err) {
            throw err;
        }
        console.log("Created component file");
    });
}
/**
 * Use React-Docgen to parse the loaded component
 * into JS object of props, comments
 *
 * @param {File} component
 * @param {String} filename
 */
function parseComponent(component, filename) {
    const componentInfo = reactDocs.parse(component);
    const splitIndex = filename.indexOf("/src/");
    const shortname = filename.substring(splitIndex + 4);
    componentInfo.filename = shortname;
    pushComponent(componentInfo);
}
/**
 * Loads a component file, then runs parsing callback
 * @param {String} file
 * @param {Promise} resolve
 */
function loadComponent(file, resolve) {
    fs.readFile(file, (err, data) => {
        if (err) {
            throw err;
        }
        // Parse the component into JS object
        resolve(parseComponent(data, file));
    });
}
/**
 * Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
 *
 * @see http://stackoverflow.com/a/5827895/4241030
 * @param {String} dir
 * @param {Function} done
 */
function filewalker(dir, done) {
    let results = [];
    fs.readdir(dir, async (err, list) => {
        if (err) return done(err);
        let pending = list.length;
        if (!pending) return done(null, results);
        list.forEach(file => {
            file = path.resolve(dir, file);
            fs.stat(file, async (err, stat) => {
                // If directory, execute a recursive call
                if (stat && stat.isDirectory()) {
                    filewalker(file, (err, res) => {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    // Check if is a Javascript file
                    // And not a story or test
                    if (
                        file.endsWith(".js") &&
                        !file.endsWith(".story.js") &&
                        !file.endsWith(".test.js")
                    ) {
                        await new Promise(resolve => {
                            loadComponent(file, resolve);
                        });
                        await results.push(file);
                    }
                    if (!--pending) done(null, results);
                }
            });
        });
    });
}
filewalker(componentFolder, (err, data) => {
    if (err) {
        throw err;
    }
    createComponentFile();
});