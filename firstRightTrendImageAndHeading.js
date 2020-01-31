function changeImage() {

    let img = document.getElementById('pictureArticleImage');
    let heading = document.getElementById('pictureArticleHeading');

    let i = 1;

    let gallery = {

        1: {
            src: "http://www.iraniansforum.com/images/stories/repression.jpg",
            content: "قیام سراسری آبان ماه و دستگاه سرکوب رژیم"
        },
        2: {
            src: "http://www.iraniansforum.com/images/stories/monicawitt.jpg",
            content: "یارگیری سپاه پاسداران در آمریکا"
        },
        3: {
            src: "http://www.iraniansforum.com/images/stories/11225.jpg",
            content: "جواد ظریف، از حلقه نیویورک تا تحریم آمریکا"
        },
        4: {
            src: "http://www.iraniansforum.com/images/stories/quincy.jpg",
            content: "فعالیت های لابی رژیم و اتاق فکری جدید تریتا پارسی بنام کوئینسی "
        },
        5: {
            src: "http://www.iraniansforum.com/images/stories/delammikhad.jpg",
            content: "نقد فیلم دلم می‌خواد"
        },
    };

    function change() {

        img.src = gallery[i].src;
        heading.innerHTML = gallery[i].content;

        i++;

        if (i == 6) {

            i = 1;
        }
    }

    let interval = setInterval(change, 5000);
}