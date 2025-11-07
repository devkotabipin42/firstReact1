import React from 'react'
import Own from './component/Own'

const App = () => {
  const jobs = [
  {
    brandLogo: "https://img.icons8.com/3d-fluency/1200/meta.jpg",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior",
    pay: "$38/hr",
    location: "Nepal – Kathmandu"
  },
  {
    brandLogo: "https://img.icons8.com/3d-fluency/1200/google-logo.jpg",
    companyName: "Google",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$52/hr",
    location: "Nepal – Pokhara"
  },
  {
    brandLogo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png",
    companyName: "Amazon",
    datePosted: "10 weeks ago",
    post: "Cloud Associate",
    tag1: "Part-time",
    tag2: "Junior",
    pay: "$30/hr",
    location: "Nepal – Chitwan"
  },
  {
    brandLogo: "https://www.citypng.com/public/uploads/preview/apple-brand-logo-70175169479329782ejsbt0dc.png?v=2025062222",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$60/hr",
    location: "Nepal – Kathmandu"
  },
  {
    brandLogo: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2012/09/2a34d8_0780274467a2423dad8f53021b21caadmv2.png?resize=376%2C375&quality=80&ssl=1",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Mid-level",
    pay: "$48/hr",
    location: "Nepal – Pokhara"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/017/396/804/non_2x/netflix-mobile-application-logo-free-png.png",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$65/hr",
    location: "Nepal – Kathmandu"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXlCxPDd3J0J-_vetVSYf4le66o_YC0LwDg&sg",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "ML Engineer",
    tag1: "Part-time",
    tag2: "Senior",
    pay: "$55/hr",
    location: "Nepal – Chitwan"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVRSNCZKUcvSYkmDLtSNNaRwRDh8rz5HxHA&s",
    companyName: "OpenAI",
    datePosted: "3 weeks ago",
    post: "AI Research Intern",
    tag1: "Part-time",
    tag2: "Junior",
    pay: "$35/hr",
    location: "Nepal – Pokhara"
  },
  {
    brandLogo: "https://4kwallpapers.com/images/wallpapers/nvidia-logo-dark-3840x2160-9996.jpg",
    companyName: "Nvidia",
    datePosted: "9 days ago",
    post: "GPU Programmer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$70/hr",
    location: "Nepal – Kathmandu"
  },
  {
    brandLogo: "https://freelogopng.com/images/all_img/1659761207uber-app-logo-png.png",
    companyName: "Uber",
    datePosted: "8 weeks ago",
    post: "React Native Developer",
    tag1: "Part-time",
    tag2: "Mid-level",
    pay: "$44/hr",
    location: "Nepal – Pokhara"
  }
];
console.log(jobs);

  return (
    <div className='parent'>
    {jobs.map((elem,idx) =>{
      console.log(idx.companyName);
      console.log(idx)
      return <div key ={ idx}>
        <Own 
          companyName={elem.companyName} 
          datePosted={elem.datePosted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay= {elem.pay}
          location={elem.location}
          logo ={elem.brandLogo}
        />
      </div>
      
      
    })}
    </div>
  )
}

export default App
