<!DOCTYPE html>
<html>
<head>
    <title>Recommendation Test</title>
    <meta charset="utf-8">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/StyleTheTest.css"/>
    <script defer src="js/TestSite.js"></script>

</head>

<body>
<h1>Write 10 songs that you like</h1>

<form>
    <div>
        <label for="listForm">Input track</label>
        <input list="songList" name="track" id="listForm"/>
        <datalist id ="songList">
            @foreach($songs as $song)
                <option>{{$song->name. " by ". $song ->artist}}</option>
            @endforeach
        </datalist>

        <button class="add" type="button">Add</button>
    </div>
</form>

<div>
    <label for = "songPool">Added songs</label>
    <ol id ="songPool">

    </ol>
</div>

<a href = "{{asset('/choose')}}"><button id="start" type="button" disabled>Next</button>

</body>

</html>
