const realine = require('readline-sync')

function start() {
    const content = {}
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return realine.question('Type a Wikipedia search term: ')
    }
    
    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = realine.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        
        return selectedPrefixText
    }

    console.log(content)
}

start()