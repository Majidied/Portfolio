<form method="POST" action="{{ route('login') }}" class="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-10">
    @csrf

    <div class="mb-4">
        <label for="email" class="block text-gray-700 font-semibold mb-2">Email Address</label>
        <input id="email" type="email" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out">
    </div>

    <div class="mb-6">
        <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
        <input id="password" type="password" name="password" required autocomplete="current-password" class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out">
    </div>

    <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200 ease-in-out">
        Login
    </button>
</form>
