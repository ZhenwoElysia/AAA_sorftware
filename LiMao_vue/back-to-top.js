// 回到顶部按钮
document.addEventListener('DOMContentLoaded', function() {
  // 创建回到顶部按钮
  const topBtn = document.createElement('button');
  topBtn.textContent = '↑ 回到顶部';
  topBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
  `;
  document.body.appendChild(topBtn);

  // 滚动监听
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      topBtn.style.opacity = '1';
      topBtn.style.visibility = 'visible';
    } else {
      topBtn.style.opacity = '0';
      topBtn.style.visibility = 'hidden';
    }
  });

  // 点击回到顶部
  topBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});