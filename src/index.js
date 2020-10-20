const dummyData = {
  'cinema':[
    {
      id:0,
      name:'메가박스 코엑스',
      brand:'megabox',
      location:'37.5124447,127.0566018',
      link:'',
      address:'서울특별시 강남구 봉은사로 524 (삼성동, 코엑스몰 지하1층)',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:1,
      name:'롯데시네마 월드타워',
      brand:'lotte',
      location:'37.5139534,127.1028367',
      link:'',
      address:'서울특별시 송파구 올림픽로 300 (신천동, 롯데월드몰 엔터테인먼트동 5~11층)',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:2,
      name:'메가박스 군자',
      brand:'megabox',
      location:'37.5557163,127.0761664',
      link:'',
      address:'서울특별시 광진구 능동로 289(군자동)',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:3,
      name:'더숲 아트시네마',
      brand:'cinema',
      location:'37.6541572,127.0592312',
      link:'',
      address:'서울특별시 노원구 노해로 480 조광빌딩 B1',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:4,
      name:'아트나인',
      brand:'megabox',
      location:'37.484694,126.9795748',
      link:'',
      address:'서울특별시 동작구 동작대로 89 (사당동, 골든시네마타워 12층)',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:5,
      name:'필름포럼',
      brand:'cinema',
      location:'37.5637568,126.9419231',
      link:'',
      address:'서울특별시 서대문구 성산로 527 (대신동. 하늬솔빌딩 지하1층)',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:6,
      name:'다락스페이스',
      brand:'cinema',
      location:'37.5413754,127.0521374',
      link:'',
      address:'서울특별시 성동구 성수이로7길 24, 2층',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:7,
      name:'씨네큐브 광화문',
      brand:'cinema',
      location:'37.5697079,126.9700805',
      link:'',
      address:'서울특별시 종로구 새문안로 68 (신문로1가, 흥국생명빌딩 지하2층)',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:8,
      name:'에무시네마',
      brand:'cinema',
      location:'37.5720343,126.9667961',
      link:'',
      address:'서울특별시 종로구 경희궁1가길 7',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:9,
      name:'인디스페이스',
      brand:'cinema',
      location:'37.5696478,126.9894701',
      link:'',
      address:'서울특별시 종로구 돈화문로 13 (관수동, 서울극장 6관)',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:10,
      name:'대한극장',
      brand:'cinema',
      location:'37.5610702,126.9931147',
      link:'',
      address:'서울특별시 중구 퇴계로 212',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:11,
      name:'씨네인디U',
      brand:'cinema',
      location:'36.321003,127.4096068',
      link:'',
      address:'대전광역시 중구 계백로 1712 기독교연합봉사 회관 1층',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:12,
      name:'롯데시네마 주엽',
      brand:'lotte',
      location:'37.6708237,126.7587991',
      link:'',
      address:'경기도 고양시 일산서구 중앙로 1436 (주엽동, 그랜드백화점 9층)',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:13,
      name:'헤이리시네마',
      brand:'cinema',
      location:'37.7916983,126.6955225',
      link:'',
      address:'경기도 파주시 탄현면 헤이리마을길 93-119 커피공장 103 카페 3층, 헤이리시네마',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
    {
      id:14,
      name:'강릉독립예술극장 신영',
      brand:'cinema',
      location:'37.7547654,128.8944589',
      link:'',
      address:'강원도 강릉시 경강로 2100 (임당동, 신영빌딩2 4층)',
      times:{
        "first":['11:00', '13:55', '16:50', '19:20'],
        "second":['12:00', '13:55', '16:50', '19:20'],
        "third":['10:00', '13:55', '16:50', '19:20'],
      }
    },
  ]
}

let isPreviewMovie = false;

function cinemaScreeningInfo(cinema){
  const movieInfoEl = document.querySelector('.content__movieTicket-info');
  console.log(cinema);
  // console.log(cinema.times.first);
  let content = ''
  content += '<li>'
  content += '  <div class="content__movieTicket-info-logo">'
  if(cinema.brand === "cinema"){

    content+='<img class="cinemaLogo"src="https://dx35vtwkllhj9.cloudfront.net/images/logos/dark/default.png" alt="인디 영화관 로고"/></div>'
  }else if(cinema.brand ==='lotte'){
    content+='<img class="cinemaLogo lotte"src="./src/image.png" alt="롯데시네마 로고"/></div>'
  }else if(cinema.brand ==='cgv'){
    content+='<img class="cinemaLogo"src="https://dx35vtwkllhj9.cloudfront.net/images/logos/dark/cgv.co.kr.png" alt="cgv 로고"/></div>'
  }else if(cinema.brand ==='megabox'){
    content+='<img class="cinemaLogo"src="https://dx35vtwkllhj9.cloudfront.net/images/logos/dark/megabox.co.kr.png" alt="메가박스 로고"/></div>'
  }
  content += '  </div>'
  content += '  <div class="content__movieTicket-info-text">'
  content += '    <h3>'+cinema.name+'</h3>'
  content += '    <p>'+cinema.address+'</p>'
  content += '  </div>'
  content += '</li>'
  movieInfoEl.innerHTML += content;
}

function test(cinemaId){
  console.log(cinemaId);
}

function getCinemasLocation(cinema){
  // 커스텀 오버레이에 표시할 내용입니다     
  // HTML 문자열 또는 Dom Element 입니다 
  var content = '' +
    '<div class="overlaybox" onclick="test('+cinema.id+')">' +
    ' <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M173.57 75.26q0 18.18-19.02 49.47T116.5 178l-19.04 22q-2.96-3.38-7.6-9.3t-16.92-22.62-21.78-31.5-17.12-32.35-7.6-28.97q0-30.87 21.55-52.64T100 .84t52 21.78 21.57 52.64z"></path></svg>'
    if(cinema.brand === "cinema"){
      content+='<img class="cinemaLogo"src="https://dx35vtwkllhj9.cloudfront.net/images/logos/dark/default.png" alt="인디 영화관 로고"/></div>'
    }else if(cinema.brand ==='lotte'){
      content+='<img class="cinemaLogo lotte"src="./src/image.png" alt="롯데시네마 로고"/></div>'
    }else if(cinema.brand ==='cgv'){
      content+='<img class="cinemaLogo"src="https://dx35vtwkllhj9.cloudfront.net/images/logos/dark/cgv.co.kr.png" alt="cgv 로고"/></div>'
    }else if(cinema.brand ==='megabox'){
      content+='<img class="cinemaLogo"src="https://dx35vtwkllhj9.cloudfront.net/images/logos/dark/megabox.co.kr.png" alt="메가박스 로고"/></div>'
    }
    
  // 커스텀 오버레이가 표시될 위치입니다 
  // var position = new kakao.maps.LatLng(37.49887, 127.026581);  
  var cinemaLocation = cinema.location.split(',');
  var position = new kakao.maps.LatLng(cinemaLocation[0], cinemaLocation[1]);

  // 커스텀 오버레이를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
  });

  // 커스텀 오버레이를 지도에 표시합니다
  customOverlay.setMap(map);
}

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
      center: new kakao.maps.LatLng(37.502, 127.026581), // 지도의 중심좌표
      level: 8 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

dummyData.cinema.map((item) => {
  getCinemasLocation(item);
  cinemaScreeningInfo(item);
});

function previewMovie(){
  const previewMovieEl = document.querySelector('.previewMovieBox');
  // previewMovieEl.classList.add('active');
  isPreviewMovie ? previewMovieEl.classList.remove('active') : previewMovieEl.classList.add('active');
  isPreviewMovie ? isPreviewMovie = false : isPreviewMovie = true;
}



document.querySelector('.contnet__movieImg-poster').addEventListener('click', previewMovie);
document.querySelector('.closeBtn').addEventListener('click', previewMovie);