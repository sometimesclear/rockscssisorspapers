let drawCount = 0;
let winCount = 0;
let loseCount = 0;
let matchCount = 0;
let heart = 3;

// 랜덤 정수 출력.
function getRandom() {
  return Math.floor(Math.random() * 3);
}

$('.btn').on('click', function (e) {
  matchCount++;
  getRandom();
  pcSelect = getRandom();

  switch (pcSelect) {
    case 0:
      $('.npc').html('✊');

      break;
    case 1:
      $('.npc').html('✌️');
      break;
    case 2:
      $('.npc').html('🖐️');
      break;
  }

  // 플레이어가 누른 버튼에 따른 선택 값
  if (e.target == document.querySelector('#scissors')) {
    $('.player').html('✌️');
  } else if (e.target == document.querySelector('#rock')) {
    $('.player').html('✊');
  } else {
    $('.player').html('🖐️');
  }

  let playerSelect =
    e.target.textContent === '가위'
      ? 1
      : e.target.textContent === '바위'
      ? 0
      : 2;

  // pc와 player 승패
  if (playerSelect === 0) {
    if (pcSelect === 0) {
      console.log('무승부');
      drawCount++;
      $('.total').html(matchCount);
      $('.draw').html(drawCount);
    } else if (pcSelect === 1) {
      console.log('승리');
      winCount++;
      $('.total').html(matchCount);
      $('.win').html(winCount);
    } else if (pcSelect === 2) {
      console.log('패');
      loseCount++;
      heart--;
      $('.total').html(matchCount);
      $('.lose').html(loseCount);
      heartUi();
    }
  } else if (playerSelect === 1) {
    if (pcSelect === 0) {
      console.log('패');
      loseCount++;
      heart--;
      $('.total').html(matchCount);
      $('.lose').html(loseCount);
      heartUi();
    } else if (pcSelect === 1) {
      console.log('무승부');
      drawCount++;
      $('.total').html(matchCount);
      $('.draw').html(drawCount);
    } else if (pcSelect === 2) {
      console.log('승');
      winCount++;
      $('.total').html(matchCount);
      $('.win').html(winCount);
    }
  } else if (playerSelect === 2) {
    if (pcSelect === 0) {
      console.log('승');
      winCount++;
      $('.total').html(matchCount);
      $('.win').html(winCount);
    } else if (pcSelect === 1) {
      console.log('패');
      loseCount++;
      $('.total').html(matchCount);
      $('.lose').html(loseCount);
      heart--;
      heartUi();
    } else if (pcSelect === 2) {
      console.log('무승부');
      drawCount++;
      $('.total').html(matchCount);
      $('.draw').html(drawCount);
    }
  }

  //하트 갯수 및 전광판 표기
  function heartUi() {
    if (loseCount == 1) {
      $('.heart').html('❤️❤️');
    } else if (loseCount == 2) {
      $('.heart').html('❤️');
    } else if (loseCount == 3) {
      $('.heart').html('끝');
      $('.winning').html(((winCount / matchCount) * 100).toFixed(1) + '%');
      $('.restart').show();
      $('#scissors').attr('disabled', true);
      $('#rock').attr('disabled', true);
      $('#paper').attr('disabled', true);
    }
  }

  $('.restart').click(function () {
    location.reload();
  });

  console.log(
    'loseCount:',
    loseCount,
    'draw:',
    drawCount,
    'win:',
    winCount,
    'total:',
    matchCount
  );
});
