<template>
    <body>    
        <div class="sidenav-left"></div>
        <div class="sidenav-right"></div>
    </body>
</template>

<script>

</script>

<style scoped>
button {
    background-color: #0026ff;
    width: 60%;
    color: white;
    padding: 15px;
    margin: 20%;
    border: none;
    cursor: pointer;
}

input[type=text], input[type=password] {
    width: 100%;
    margin: 8px 0;
    padding: 40px 20px;
    box-sizing: border-box;
}

button:hover {
    opacity: 0.6;
}

.container {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 50%;
    padding: 75px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10%;
}

.link:hover {
    color: green;
}

body {
    display: flex;
    flex-direction: column;
    text-align: center;
}

header {
    padding: 10px;
    border-radius: 25px;
    height: 75px;
    width: 97.5%;
    background-color: lightcyan;
    text-align: left;
    position: fixed;
    top: 0px;
}

footer {
    padding: 10px;
    border-radius: 25px;
    height: 75px;
    width: 97.5%;
    background-color: lightcyan;
    text-align: center;
    position: fixed;
    bottom: 0px;
}

.post {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    /* width: 40%;
    height: 50%; */
    border-radius: 25px;
    width: 40%;
    height: 350px;
    padding: 75px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10%;
    background-color: lightcyan;
    text-align: center;
}

div small {
    font-size: smaller;
}

.post > p {
    font-size: large;
}

.post > img {
    max-width: 70%;
    max-height: 40%;
}

.sidenav-left {
    height: 60%;
    background-position-y: center;
    width: 10%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 125px; /* Stay at the top */
    left: 10px;
    bottom: 125px;
    background-color: lightcyan; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    border-radius: 25px;
}

.sidenav-right {
    height: 60%;
    width: 10%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 125px; /* Stay at the top */
    right: 10px;
    bottom: 125px;
    background-color: lightcyan; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    border-radius: 25px;
}

.dropimg {
    cursor: pointer;
}

.dropdown {
    float:right;
    position: relative;
    display: inline-block;
}

.user-info {
    display: none;
    position: absolute;
    background-color: darkgray;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.user-info p {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;  
}

.show {
    display: block;
}
</style>