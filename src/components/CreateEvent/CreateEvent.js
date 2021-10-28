
export default function CreateEvent (){
     return(
          <div className="p-3 h-screen"> 
<form class=" shadow-md mx-auto max-w-sm rounded-xl space-y-3 ">

<div className="p-4  bg-green-500 flex flex-row justify-between ">
               <h2 class = "  ml-1 font-serif font-bold text-lg text-white tracking-wide"> Add New Event</h2>
               <svg class = "flex flex-end" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"/></svg>

               
          </div>

          <div className=" space-x-3 px-3 flex flex-row sm:flex-row md:flex-`col lg:flex-col m-2" id="event-note">
          <span class=" font-serif text-md   border-b-2 border-green-500 font-bold inline-flex active text-gray-800">Event</span> 
          <span class="  font-serif text-gray-600">Reminder</span> 
          </div>

<div className = "Event-name p-2 mx-2 flex flex-row "> 
<label for = "eventName" class =" space-x-5" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"/></svg>
</label>
<input  id ="eventName"type="text"placeholder="Trip to ..." class =" border-gray-300 w-full rounded-md px-2 border-b-2" />
</div>

<div className=" Date  flex flex-row md:flex-row xl:flex-row w-1/2 px-3 justify-space-between ">
     <div className="startdate "> 
     <label id = "start"for="startdate" class=" font-serif text-sm  text-gray-600"  >Start Date </label>
     <input  id = "startdate"type="date" placeholder ="Start Date" required class = "  border-b-2 border-gray-300 w-full rounded-md px-2  outline-bottom"/>
      </div>

      <div className="endate "> 
     <label for="endate" id="end" class=" font-serif text-sm  text-gray-600">End Date </label>
     <input id = "endate" type="date" placeholder ="End Date" required class = "  border-b-2 border-gray-300 w-full rounded-md px-2  outline-bottom"/>
      </div>
</div>

<div className ="  flex flex-row p-3 space-x-3 mt-4" id="time"> 
<input type = "time" placeholder class = "  border-b-2 border-gray-300 w-full rounded-md px-2  outline-bottom"/>
<input type = "time" placeholder class = "  border-b-2 border-gray-300 w-full rounded-md px-2  outline-bottom"/>
<input type = "time" placeholder class = "  border-b-2 border-gray-300 w-full rounded-md px-2  outline-bottom"/>


</div>

<div className="p-2 mx-3">
<label for="" class=" font-serif text-gray-600"> All Day</label>
<input type="checkbox" class = "  border-b-2 border-gray-300  rounded-md p-5 mx-1  outline-bottom" />
</div>

<div className ="Description p-3 mx-3">
<div className="toolbar">
     <h3 class=" font-serif text-gray-600"> Description</h3>

     <div className ="flex flex-row space-between p-2 mb-3">
     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.5 16H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h12.5c1.38 0 2.5 1.12 2.5 2.5S20.88 13 19.5 13H9c-.55 0-1-.45-1-1s.45-1 1-1h9.5V9.5H9c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h10.5c2.21 0 4-1.79 4-4s-1.79-4-4-4H7c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5h11.5V16z"/></svg>
     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"/></svg>
     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>
     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/></svg>
     </div>
</div>
<div> <input  type ="text" placeholder="Enter Text here" class = " border-b-2 border-gray-300  w-full rounded-md   outline-bottom"/></div>
</div>

<div className ="eventag p-2 mx-3 flex space-between"> 
<div> <label class ="font-bold text-md font-serif text-gray-600" > Event Tag</label>
<input type ="text"  class = "  border-b-2 border-gray-300  w-full rounded-md   outline-bottom"/></div>

<input type="color" class=" rounded-lg"/>
</div>

<div className ="Buttons flex justify-end space-x-3 p-2 sm:text-sm">
     <button class="px-6 py-2 flex w-1/4  items-center ring-2 ring-green-300 rounded-sm outline text-center text-lg  text-green-300 max-w-md hover:bg-red-500 sm:text-sm "> Cancel </button>
     <button type="submit"class=" px-6 py-2 rounded-sm flex items-center w-1/4 text-white  bg-green-500 text-lg  hover:bg-green-800 sm:sm:text-sm"> Create </button>
</div>
</form>
</div>
     )}
