<!DOCTYPE html>
<html>
<head>
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
        <p>Song Title - Artist</p>
    </section>
    <section id="buttons">
        <form>
            <input type="button" value="Like" name="opinion" />
            <input type="button" value="Don't like" name="opinion"/>
            <input type="button" value="Don't know" name="opinion"/>
        </form>
    </section>
</div>
</body>

</html>
