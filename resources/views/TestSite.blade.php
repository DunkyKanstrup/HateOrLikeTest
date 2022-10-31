<!DOCTYPE html>
<html>
<head>
    <title>MyPC</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('styles/StyleTheTest.css') }}"/>

    <script defer src={{asset("js/TestSite.js")}}></script>

</head>

<body>
<h1>Write 10 songs that you like</h1>

<form>
    <div>
        <label for="listForm">Input track</label>
        <input list="songList" name="track" id="listForm"/>
        <datalist id ="songList">
            <option value ="Caterpillars riding bullets"/>
            <option value = "Fever Dreams"/>
            <option value = "Sham Pain"/>
            <option value = "Check Your Spam"/>
        </datalist>
        <button class="add" type="button">Add</button>
    </div>
</form>

<div>
    <label for = "songPool">Added songs</label>
    <ol id ="songPool">

    </ol>
</div>

<a href = "{{asset('/choose')}}"><button id="start" type="button" disabled>Start test</button>

</body>

</html>
