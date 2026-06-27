
const images = [

"https://picsum.photos/id/1015/800/500",

"https://picsum.photos/id/1016/800/500",

"https://picsum.photos/id/1018/800/500",

"https://picsum.photos/id/1020/800/500",

"https://picsum.photos/id/1024/800/500"

];

let index = 0;

const img = document.getElementById("sliderImage");
const counter = document.getElementById("counter");

function showImage(i)
{

    img.src=images[i];
}

function nextSlide()
{

    index++;

    if(index==images.length)
    {
        index=0;
    }

    showImage(index);

}

function prevSlide()
{

    index--;

    if(index<0)
    {
        index=images.length-1;
    }

    showImage(index);

}
showImage(index);
