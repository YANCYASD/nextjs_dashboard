export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-8 text-center text-2xl font-semibold">登录</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              用户名
            </label>
            <input
              type="text"
              id="username"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              placeholder="请输入用户名"
              value={''}
              //   onChange={() => {}}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              密码
            </label>
            <input
              type="password"
              id="password"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              placeholder="请输入密码"
              value={''}
              //   onChange={() => {}}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              登录
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
