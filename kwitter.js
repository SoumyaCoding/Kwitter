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
message_data= childKey;
name= message_data('name');
message= message_data('message');  
like= message_data('like');
name_with_tag = "<h4>" + name + <"img ='user_tick' src='tick.png'"></h4>;
message_with_tag = "<h4 class="message_h4>" + message + "</h4>";
like_button="<button class='btn btn-warning'id="firebase_message_id=" value+"like" onclick='updateLike(this.id)'>"
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>"
                   
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

function update(message_id)
{
button_id = message_id;
likes = document.getElementById(button_id).value;
update_likes = Number(likes) + 1;

firebase.database().ref("/").chid(message_id).update({
like : update_likes
});
}
