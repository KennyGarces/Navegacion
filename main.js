
function login(e) {  
    e.preventDefault();
    console.log('La patada mortal de un cojo');

    let inputUsuario = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    console.log(inputUsuario);
    console.log(inputPassword);

    fetch("http://89.116.25.43:3000/api/login", {
        method: "POST",
        body: JSON.stringify({
            usuario: inputUsuario,
            password: inputPassword
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

        .then(response => response.json())
        .then(data => {
            console.log(data);
            sessionStorage.setItem("token", data["jwt"])
            sessionStorage.setItem("usuario", JSON.stringify(data.usuario))
            
            if(data.status == 200){
                location.href ="dashboard.html"
            }else{
                alert("Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.")
            }
        
        })
       // .then(redirect => location.href = 'dashboard.html')
        //.catch(error => console.log(error));
}


function getUsers(){ 

        fetch('http://89.116.25.43:3000/api/usuarios/listar')
            .then(response => response.json())
            .then(data => {
                console.log(data.usuarios);
                // creates a <table> element and a <tbody> element
                const tbl = document.createElement("table");
                const tblBody = document.createElement("tbody");
                const userList = data.usuarios
                
                for(let i = 0; i < userList.length; i++){
                    const row = document.createElement("tr");
                    for (const property in userList[i]) {
        
                        const cell = document.createElement("td");
                        const cellText = document.createTextNode(`${userList[i][property]}`);
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                        console.log(`${property}: ${userList[i][property]}`);
                      }
                    // add the row to the end of the table body
                    tblBody.appendChild(row);
        
                }
       
                tbl.appendChild(tblBody);
                document.body.appendChild(tbl);
                tbl.setAttribute("border", "5");

                const cells = tbl.getElementsByTagName("td");
                for (let i = 0; i < cells.length; i++) {
                cells[i].style.padding = "3px";
                cells[i].style.border = "2px solid black";
                } 
                tbl.style.marginLeft = "2%";
                tbl.style.marginRight = "2%";
//---------------------------------------------------------------------------------------------------------------
        
        // crear header 
                const tblHead = document.createElement("thead");
                const headers = Object.keys(userList[0]);
                const headerRow = document.createElement("tr");
         
             
                for (let i = 0; i < headers.length ; i++) {
                const headerCell = document.createElement("th");
                const headerText = document.createTextNode(headers[i]);
                headerCell.appendChild(headerText);
                headerRow.appendChild(headerCell);

                }  
                   
                tblHead.appendChild(headerRow);
                tbl.appendChild(tblBody);
                tblHead.style.backgroundColor = "lightGray"
                tbl.appendChild(tblHead);
              
                
             

               
                console.log(data);
                
            })
          .catch(error => console.error(error));
}
        //-------------------------------------------- ---------------------------------------------------------------------         

            //console.log(usuarios.usuarios);
      
        // const tbl = document.createElement("table");
        // const tblBody = document.createElement("tbody");
        // const userList = usuarios.usuarios


        // const tblHead = document.createElement("thead");
        // const headers = Object.keys(userList[0]);
        // const headerRow = document.createElement("tr");

        //-----------------------------------------------------------------------------------
        // crear header 
        // for (let i = 0; i < headers.length ; i++) {
        // const headerCell = document.createElement("th");
        // const headerText = document.createTextNode(headers[i]);
        // headerCell.appendChild(headerText);
        // headerRow.appendChild(headerCell);
        // }
    
        // tblHead.appendChild(headerRow);
        // tbl.appendChild(tblHead);
        // tbl.appendChild(tblBody);
        
        // tblHead.style.backgroundColor = "lightGray"
        


        //-------------------------------------------------------------------------------------
        //Crear tabla

        // for(let i = 0; i < userList.length; i++){
        //     const row = document.createElement("tr");
        //     for (const property in userList[i]) {

        //         const cell = document.createElement("td");
        //         const cellText = document.createTextNode(`${userList[i][property]}`);
        //         cell.appendChild(cellText);
        //         row.appendChild(cell);
        //         console.log(`${property}: ${userList[i][property]}`);
        //       }
            
        //     tblBody.appendChild(row);
        // }
        
        // tbl.appendChild(tblBody);
        
        // document.body.appendChild(tbl);

        // tbl.style.borderCollapse = "collapse";
        // tbl.style.border = "5px solid black";
        // tbl.style.marginLeft = "2%";
        // tbl.style.marginRight = "2%";
        
        // const cells = tbl.getElementsByTagName("td");
        // for (let i = 0; i < cells.length; i++) {
        //   cells[i].style.padding = "3px";
        //   cells[i].style.border = "1px solid black";
        // } 
        
