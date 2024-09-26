// window.addEventListener('load',()=>{

// })
var input=document.querySelector('#input');



function addtask(event){
    if (!input.value ){
        alert('please add task ')
    }
    else{
            event.preventDefault();// it prevent website being reload when form is submited i used this because i need add task when i  clicked enter  
            //  console.log(input.value)
            
            //create new div container
            var new_div= document.createElement('div');
            new_div.className="task_list_container";
       
            // create new input for task
            var new_input= document.createElement('input');
            new_input.className="task_text";
            new_input.value=input.value;
            new_input.setAttribute('readonly', true);
            // console.log(new_input);
            // console.log(new_input.value);
             new_div.append(new_input);
          

           // create new button edit
            var new_but_edit= document.createElement('buttton');
            new_but_edit.className="edit";
            new_but_edit.textContent="Edit";
            new_but_edit.setAttribute('onclick', 'edit(event)');// Add the onclick attribute dynamically
            // console.log(new_but_edit);
            new_div.append(new_but_edit);

           // create new button delete
            var new_but_del= document.createElement('buttton');
            new_but_del.className="del";
            new_but_del.textContent="Del";
            new_but_del.setAttribute('onclick', 'del(event)');
            // console.log(new_but_edit);
            new_div.append(new_but_del);
   
           
            document.querySelector('.task-container').appendChild(new_div);
            
            console.log(new_div)

             input.value=""//remove input value once current value is added

        
            
    }

}

function del(event){
    // var a=event.target.parentElement;
    // console.log(a)
    // a.remove();
     event.target.parentElement.remove();// do the same job as above code
}

function edit(event) {
    var edit_btn = event.target;
    const parentDiv = edit_btn.parentElement;
        
    // Find the input element within the same parent div
    const inputField = parentDiv.querySelector('input.task_text');
    
    // Toggle between Edit and Save modes
    if (edit_btn.textContent === 'Edit') {
        inputField.removeAttribute('readonly'); // Make input editable
        inputField.focus(); // Focus the input
        edit_btn.textContent = 'Save'; // Change button text to "Save"
    } else {
        inputField.setAttribute('readonly', true); // Make input readonly
        edit_btn.textContent = 'Edit'; // Change button text back to "Edit"
    }
}



