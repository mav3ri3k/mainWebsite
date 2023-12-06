export default function Home() {
  return (
    <div class="w-full h-full bg-slate-200 abg-[#8e54e1] p-4 flex flex-row justify-center">
      <div class="grow max-w-screen-md flex flex-col">
        <div class="basis-1/2 grow-0 p-4 flex flex-row justify-center">
          <img src="/new.png" class="sm:max-w-sm shadow-xl rounded-3xl" />
        </div>
        <div class="basis-1/2 p-4">
          <h1 class="place-self-end font-bold text-black text-5xl sm:text-7xl text-error text-center grow font-signature">
            Apurva Mishra
          </h1>
          <div class="flex flex-row gap-4 p-4 justify-center">
            <a
              href="https://github.com/mav3ri3k"
              class="hover:ring-4 ring-offset-4 rounded"
            >
              <strong>GitHub</strong>
            </a>
            <a
              href="https://twitter.com/mav3ri3k"
              class="hover:ring-4 ring-offset-4 rounded"
            >
              <strong>Twitter</strong>
            </a>
            <a
              href="https://blog.apurva-mishra.com"
              class="hover:ring-4 ring-offset-4 rounded"
            >
              <strong>Blogs</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
