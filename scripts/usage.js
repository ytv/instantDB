var usage = {
    view: `   view        node mockDB.js <collectionName> view\n`,
    // find: `   find        node mockDB.js <collectionName> find [<query>]\n`,
    insert: `   insert      node mockDB.js <collectionName> insert [n]\n`,
    delete: `   delete      node mockDB.js <collectionName> delete\n`,
    // delete: `   delete      node mockDB.js <collectionName> delete [<query>]\n`,
    // replace: `   replace     node mockDB.js <collectionName> replace <query> <replacementData>\n`,
    // update: `   update      node mockDB.js <collectionName> replace <query> <updatedData>\n`,
    usage: `\nUsage: `,
    collectionNames: `Valid <collectionName> values: 'users', 'posts'`
}

usage.help =
`
Usage: node mockDB.js <command>

where <command> is one of:

${usage.view}
${usage.insert}
${usage.delete}
Note
1. ${usage.collectionNames}
2. <query>, <replacement>, <updatedData> should be in JSON format {<field>: <value>, ..}
2. [n] is a non-negative number

    `;

module.exports = usage

// ${usage.find}
// ${usage.replace}
// ${usage.update}
