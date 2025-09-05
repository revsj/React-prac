// PascalCasing 

function Message() {
    // Hello world //
    // return <h1>Shalom, World!</h1>;
    
    // Conditional rendering//
    const name = 'Clare';
    let age = 30;
    let revoAge = 18; 
    if (age < revoAge) {
        return <h1>Hello {name} welcome</h1>;
         }     else {
            return <h1>Hello {name} you're not allowed yet</h1>;
        }
    }




export default Message;