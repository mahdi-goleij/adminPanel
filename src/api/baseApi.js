export const baseApi = async (url, method, postData, isFormData) => {
  let headers = {};
  
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  // اگر توکن دارید می‌توانید اینجا اضافه کنید
  // const token = localStorage.getItem('token');
  // if (token) headers["Authorization"] = `Bearer ${token}`;

  let res = await fetch(`https://api.webehsan.com${url}`, {
    method: method,
    headers: isFormData ? undefined : headers, // اگر فرم‌دیتاست کلاً هدر فرستاده نشود تا مرورگر مدیریت کند
    credentials: "include",
    mode: "cors",
    body: postData ? (isFormData ? postData : JSON.stringify(postData)) : undefined,
  });

  return res.json();
};