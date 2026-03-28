let sentence = 'Hello'
const vowels = 'aeiou'
print = ""

for (let i = 0; i < sentence.length; i++) { 
    if (vowels.includes(sentence[i])) { 
        print +=sentence[i] 
    } 
    else { print += sentence[i] + "op" 
    } 
}
console.log(print)
