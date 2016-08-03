var usage = {
    view: `   view        node instantDB.js <collectionName> view\n`,
    insert: `   insert      node instantDB.js <collectionName> insert [n]\n`,
    delete: `   delete      node instantDB.js <collectionName> delete\n`,
    usage: `\nUsage: `,
    collectionNames: `<collectionName> could be the name of an old collection you want to reuse or the name of a
    new collection you wish to create`
}

usage.help =
`

Usage: node instantDB.js <collectionName> <command>

where <command> is one of:

${usage.view}
${usage.insert}
${usage.delete}

Notes
1. ${usage.collectionNames}
2. [n] is a positive integer

`;

module.exports = usage
