<!DOCTYPE html>
<html>
<head>
    <title>MyPC</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('styles/StyleTheTest.css') }}"/>
</head>

<body>
<h1>Pls write 10 songs that you like</h1>

<form>
    <input type="text" name="LikedSongs"/>
    <button type="submit">Add song</button>
</form>

<h1>List of liked songs</h1>
<ol id="list">
    
</ol>


<button type="submit">Submit</button>
</body>

</html>
