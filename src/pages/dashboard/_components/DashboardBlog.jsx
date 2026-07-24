import ImgBlog from '../../../assets/media/blog.png'


export const DashboardBlog = () => {
  return (
    <>
      <div className="dash-left">
        <div className="dash-left-item">
            <img src={ImgBlog} alt="blog" />
            <div className="dash-left-item-des">
                <h4>عنوان پست بلاگ در این قسمت</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>
        </div>
      </div>
    </>
  );
};
