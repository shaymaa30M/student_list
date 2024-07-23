let student_arr = [];
function add_student() {
  let name = document.getElementById("name");
  let id = document.getElementById("id");
  let status = document.getElementById("status");
   let student = {
    name: name.value,
    id: id.value,
    status: status.value,
  };
  
  try{
    if(!id.value || !name.value){
      throw new Error("you can enter id and name");
    }
    student_arr.push(student);
  }catch(error){
    alert("error you must enter all of id and name")
  }

  
  name.value = "";
  id.value = "";
  status.value = "";

  display_student();
  display_btn()
}

function display_student() {
  let student_list = document.getElementById("display");
  student_list.innerHTML = "";

  student_arr.forEach((student, index) => {
    let item_student = document.createElement("div");
    item_student.innerHTML = `name: ${student.name} <br> id: ${student.id} <br> status: ${student.status} <br>`;
    
    let delete_button = document.createElement("button");
    delete_button.textContent = "delete";
    delete_button.onclick = function() {
        delete_student(index);
    };

    item_student.innerHTML = `Name: ${student.name} </br> ID: ${student.id} </br> Status: ${student.status}`;

    item_student.appendChild(delete_button);
    student_list.appendChild(item_student);
  });}

  function delete_student(index) {
    student_arr.splice(index, 1);
    display_student();
}




















