
const images = [
"https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/754444/pexels-photo-754444.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/938582/pexels-photo-938582.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/938580/pexels-photo-938580.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/29755939/pexels-photo-29755939.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/8218/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/19984928/pexels-photo-19984928.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/3792107/pexels-photo-3792107.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/2389476/pexels-photo-2389476.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/427649/pexels-photo-427649.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/2700061/pexels-photo-2700061.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/2600325/pexels-photo-2600325.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/19804230/pexels-photo-19804230.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/3876409/pexels-photo-3876409.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/245584/pexels-photo-245584.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/194913/pexels-photo-194913.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/3792135/pexels-photo-3792135.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/889863/pexels-photo-889863.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/3581058/pexels-photo-3581058.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/5058113/pexels-photo-5058113.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/4449872/pexels-photo-4449872.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/123007/pexels-photo-123007.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/1869643/pexels-photo-1869643.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/136738/pexels-photo-136738.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/28977814/pexels-photo-28977814.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/18268039/pexels-photo-18268039.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/27910918/pexels-photo-27910918.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/18435551/pexels-photo-18435551.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/17310467/pexels-photo-17310467.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/15377585/pexels-photo-15377585.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/17855577/pexels-photo-17855577.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/28310231/pexels-photo-28310231.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/21631300/pexels-photo-21631300.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/5116269/pexels-photo-5116269.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/18233890/pexels-photo-18233890.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/10900220/pexels-photo-10900220.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/15723980/pexels-photo-15723980.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/12228191/pexels-photo-12228191.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/13768733/pexels-photo-13768733.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/10813370/pexels-photo-10813370.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/18435548/pexels-photo-18435548.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/15981501/pexels-photo-15981501.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/28126699/pexels-photo-28126699.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/4236264/pexels-photo-4236264.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/20618938/pexels-photo-20618938.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/27015352/pexels-photo-27015352.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/4963281/pexels-photo-4963281.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/19903950/pexels-photo-19903950.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/6558204/pexels-photo-6558204.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/6635770/pexels-photo-6635770.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/6507074/pexels-photo-6507074.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/6412141/pexels-photo-6412141.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/7210063/pexels-photo-7210063.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/11344012/pexels-photo-11344012.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/11787098/pexels-photo-11787098.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/12031390/pexels-photo-12031390.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/15367279/pexels-photo-15367279.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/14818466/pexels-photo-14818466.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/14776718/pexels-photo-14776718.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/15197719/pexels-photo-15197719.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/16005633/pexels-photo-16005633.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/16261354/pexels-photo-16261354.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/16912191/pexels-photo-16912191.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/14308456/pexels-photo-14308456.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/15976814/pexels-photo-15976814.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/14700586/pexels-photo-14700586.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/20884174/pexels-photo-20884174.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/22602020/pexels-photo-22602020.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/9213610/pexels-photo-9213610.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/9213609/pexels-photo-9213609.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/10561402/pexels-photo-10561402.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/19986975/pexels-photo-19986975.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/19986947/pexels-photo-19986947.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/14150727/pexels-photo-14150727.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/6218291/pexels-photo-6218291.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/8979534/pexels-photo-8979534.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/26928882/pexels-photo-26928882.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/13232248/pexels-photo-13232248.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  "https://images.pexels.com/photos/12278545/pexels-photo-12278545.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
];

export default function fetchImages(setPhotos) {
  setPhotos(images);
}
