//変数の定義
const timer = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let startTime;
let elapsedTime = 0;
let timeoutId;

//時間を取得して桁数を合わせる
function countUp(){
  const d = new Date(Date.now() - startTime + elapsedTime); //現在の時刻（Date.now）からstartを押した時の時刻(startTime)を引く
  const h = String(d.getUTCHours()).padStart(2, '0');
  const m = String(d.getUTCMinutes()).padStart(2, '0');
  const s = String(d.getUTCSeconds()).padStart(2, '0');
  const ms = String(d.getUTCMilliseconds()).slice(-2);
  timer.textContent = h + ':' + m + ':' + s + ':' + ms;

  timeoutId = setTimeout(() => {
    countUp();
  }), 100;
}

// 状態:初期 または Reset直後
function buttonInitial() {
  start.classList.remove('inactive'); // 活性
  stop.classList.add('inactive')    // 非活性
  reset.classList.add('inactive')   // 非活性
}
// 状態:タイマー動作中
function buttonRunning() {
  start.classList.add('inactive')   // 非活性
  stop.classList.remove('inactive');  // 活性
  reset.classList.add('inactive')   // 非活性
}
// 状態:タイマー停止中
function buttonStopped() {
  start.classList.remove('inactive'); // 活性
  stop.classList.add('inactive')    // 非活性
  reset.classList.remove('inactive'); // 活性
}
// ボタンを'初期'状態とする
buttonInitial()

// Startボタンクリック
start.addEventListener('click', () => {
  if (start.classList.contains('inactive') === true) {
    return;
  }
  buttonRunning();
  startTime = Date.now();
  countUp();
});

//Stopボタンクリック
stop.addEventListener('click', () => {
  if (stop.classList.contains('inactive') === true) {
    return;
  }
  buttonStopped();
  clearTimeout(timeoutId);
  elapsedTime += Date.now() - startTime;
});

//リセットボタンクリック
reset.addEventListener('click', () => {
  if (reset.classList.contains('inactive') === true) {
    return;
  }
  buttonInitial()
  timer.textContent = '00:00:00:00';
  elapsedTime = 0;
});