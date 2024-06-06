<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Admin</title>
</head>
<body>

<div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-lg max-w-sm w-full">
        <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Admin Dashboard</h1>

        <form action="{{ route('admin.login') }}" method="POST">
            @csrf

            <div class="mb-6">
                <label for="code" class="block text-gray-700 font-semibold mb-2">Enter Code:</label>
                <input type="text" name="code" id="code" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out">
            </div>

            <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out">
                Submit
            </button>
        </form>
    </div>
</div>
</body>
</html>


