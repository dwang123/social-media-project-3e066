<html lang="en"><head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
	<link href="social_Media.css" rel="stylesheet">
    <title>Scrabblers Unite</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
   
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
<body>
<!--this is my the top bar on my website-->
    <nav id = "topBar" class="navbar navbar-inverse navbar-static-top">
      <div class="container">
          <!--Logo-->
          <a class="navbar-brand" href="#"><img src="http://p3cdn4static.sharpschool.com/UserFiles/Servers/Server_550661/Image/MiddleSchool/5th%20Grade/logo_scrabble.png" width="200px" height="39px"></a>
          <!--Search bar-->
          <div id="search" class="col-md-3 col-md-2 sidebar"><input type="text" name="search" placeholder="Search for Scrabblers..." style="width: 500px; height: 30px; border-radius: 7px"></div>
          <!--Profile picture-->
          <div id="proPic"><a href="#"><img src="https://img.clipartfest.com/175ffe255790108f8c44746c439f845e_users-profile-icon-profile-icon-clipart_500-500.png" width="40px" height="40px"></a>
           <button type="button" class="btn btn-primary" onclick="signIn();"><i class="fa fa-google-plus"></i> Sign-In With Google</button>
          </div>
        </div>
    </nav>
  <div class="container">

        <div class="row">

            <!-- Blog Entries Column -->
            <!--Note #1: all links currently just refresh the page; new links TBA-->
            <!--Note #2: all pictures are TBA eventually-->
            <div class="col-md-8">

                <!-- First Blog Post -->
                <h1>
                    <a href="#">Mr. Gundel</a>
                </h1>
                <hr>
                <img class="img-responsive" src="http://placehold.it/900x300" alt="">
                <hr>
                <p>Caption</p>
                <hr>
            

                <!-- Second Blog Post -->
                <h2>
                    <a href="#">ScrabbleBoi77</a>
                </h2>
                <hr>
                <img class="img-responsive" src="http://placehold.it/900x300" alt="">
                <hr>
                <p>Caption</p>
                <hr>

                <!-- Third Blog Post -->
                <h2>
                    <a href="#">Sample Text</a>
                </h2>
                <hr>
                <img class="img-responsive" src="http://placehold.it/900x300" alt="">
                <hr>
                
                <p>Caption</p>
                <hr>

                <!-- Pager -->
                <ul class="pager">
                    <li class="previous">
                        <a href="#">&larr; Older</a>
                    </li>
                    <li class="next">
                        <a href="#">Newer &rarr;</a>
                    </li>
                </ul>

            </div>
            <!--Here is the sidebar with the list of your friends-->
    <div class="container">
<div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-md-2 sidebar" id="sideBar">
          <ul class="nav nav-sidebar">
            <li class="active"><a href="#">Fellow Scrabblers <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Mr. Gundel</a></li>
            <li><a href="#">IceJJfish</a></li>
            <li><a href="#">mom</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">dad</a></li>
            <li><a href="">Mr. Meyers</a></li>
            <li><a href="">Friend #1</a></li>
            <li><a href="">Friend #2</a></li>
            <li><a href="">Friend #3</a></li>
          </ul>
          <ul class="nav nav-sidebar">
            <li><a href="">Friend #4</a></li>
            <li><a href="">Friend #5</a></li>
            <li><a href="">Friend #6</a></li>
          </ul>
        </div>

<script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDQwPf6YD61OxCrz90Q67DkPl0Txii6GDo",
    authDomain: "social-media-project-3e066.firebaseapp.com",
    databaseURL: "https://social-media-project-3e066.firebaseio.com",
    projectId: "social-media-project-3e066",
    storageBucket: "social-media-project-3e066.appspot.com",
    messagingSenderId: "50650880001"
  };
  firebase.initializeApp(config);
</script>
  <script src="https://apis.google.com/js/platform.js" async defer></script>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
	<script src="social_media.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script src="js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    

</body></html>
