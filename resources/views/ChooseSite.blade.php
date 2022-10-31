<!DOCTYPE html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="{{asset("js/ChoiceSite.js")}}" defer></script>
    <title>Results</title>
    <link rel="stylesheet" href="{{ asset('styles/StyleTheChoice.css') }}"/>

</head>
<body>
<div>
    <h1>TEST</h1>
    <p>Below is a suggestion based on your choices on the previous page. Choose whether you like
    the song or not. If you do not know the song, go listen to it now or press the "Don't know" button
    </p>
    <section id="song">
        <p id="song">Song Title - Artist</p>
    </section>
    <section id="buttons">
        <form>
            <button id="btn" value="Like" name="like" >Like</button>
            <button id="btn" value="Don't like" name="don't like" >Dislike</button>
            <button id="btn" value="Don't know" name="don't know" >Don't know</button>
        </form>
    </section>
</div>
</body>

</html>
