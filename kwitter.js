function adduser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";

}

function addRoom(){
 room_name = document.getElementById("room_name").value;  
    firebase.database().ref("/").chid(room_name).update({
        pursose :"adding room name"
});
   localStorage.setItem("room_name", room_name_name);
    window.location = "kwitter_room.html";
 
}
function getData(){firebase.database().ref("/").on("value" , (snapshot) {document.getElementById("output").innerHTML
Room_names = childKey;
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML += row
};);}
getData()

function redirectToRoomName()
{
    localStorage.setItem("room_name",name);
    window.location = "kwitter_room.html";

}
function send()
msg = document.getElementById(msg).value;
firebase.database().ref("/").push({
    name:user_name,
    message:msg,
    like:0
});
msg = document.getElementById(msg).value = "";
function logout(){
    localStorage.removeItem(user_name);
    localStorage.removeItem(room_name_name);
    window.location = "kwitter_room.html";
}