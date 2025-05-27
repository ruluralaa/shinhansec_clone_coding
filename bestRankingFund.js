// DOM이 완전히 로드된 후 실행되는 초기화 함수
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initLoadingBindings();
});


// 탭 클릭 이벤트를 처리하는 함수
function initTabs() {
    const tabs = document.querySelectorAll('.fund-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 모든 탭에서 active 클래스 제거
            tabs.forEach(t => t.classList.remove('active'));
            // 클릭된 탭에 active 클래스 추가
            this.classList.add('active');
        });
    });
}

// 로딩 애니메이션을 보여주는 함수
function showLoading() {
    const spinner = document.getElementById('loading-spinner');
    const overlay = document.getElementById('loading-overlay');
    const loadingImg = document.getElementById('loading-img');

    // 로딩 이미지 설정
    loadingImg.src = "https://shinhansec.com/siw/common/images/common/loading.gif";
    overlay.src = "https://shinhansec.com/siw/common/images/common/loading_line.gif";

    // 로딩 스피너 표시
    spinner.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // 스크롤 방지

    setTimeout(() => {
        spinner.style.display = 'none';
        document.body.style.overflow = ''; // 스크롤 복원
    }, 2000);
}

// 특정 요소에 로딩 이벤트를 바인딩하는 함수
function bindLoadingToElement(selector, eventType = 'click') {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.addEventListener(eventType, showLoading);
    });
}

// 로딩 이벤트를 바인딩하는 초기화 함수
function initLoadingBindings() {
    // 체크박스 변경 시 로딩
    bindLoadingToElement('.util-checkbox input[type="checkbox"]', 'change');

    // 버튼 클릭 시 로딩
    bindLoadingToElement('#detail-btn');
    bindLoadingToElement('#cardview-btn');

    // 필요한 다른 요소가 있다면 이 함수 내에서 계속 추가 가능
    // bindLoadingToElement('.your-selector');
}


// 로딩바 처리하는 함수
function initLoadingEvent() {
    const checkboxes = document.querySelectorAll('.util-checkbox input[type="checkbox"]');
    const spinner = document.getElementById('loading-spinner');
    const loadingImg = document.getElementById('loading-img');
    const overlay = document.getElementById('loading-overlay');

    checkboxes.forEach(cb => {
        cb.addEventListener('change', function() {
            loadingImg.src = "https://shinhansec.com/siw/common/images/common/loading.gif";
            loadingImg.src = "https://shinhansec.com/siw/common/images/common/loading_line.gif";
            // 로딩 스피너 표시
            overlay.style.display = 'block';
            spinner.style.display = 'flex';
            
            // 1초 후 로딩 스피너 숨김
            setTimeout(() => {
                spinner.style.display = 'none';
                overlay.style.display = 'none';
            }, 1000);
        });
    });
}
