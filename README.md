# Overview
I have used NextJs with Typescript for solving the given problem. As there is not much Backend work there.
I was asked to create an API for Frontend which will get data from Xero and serve to FE.

I have used React Server components so the API call is happening at the server and the table is a client component.

I also used Tailwind for styling and the solution is containerise as asked.

# How to run the application

- Clone the application
- Run `docker compose up` command.
- API endpoint should work on `localhost:3000` and application should be working on `localhost:3001`

## To run local dev env
- npm install
- npm run dev

### Things to do
- I haven't spend much time to improve the UI.  I focused on implementing the solution.
- Few things which I consider improving having more time, is to design the org name and date at the top.
- Right align the header titles
- Assets/Liabilities headings are having same RowType (section) in the api results, so I couldn't able to style them different to other sections.