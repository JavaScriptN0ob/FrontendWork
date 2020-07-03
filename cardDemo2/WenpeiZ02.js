const hideBrisbane = () => {
  let brisbaneHidden = document.getElementById('brisbaneHidden');
  let brisbaneShow = document.getElementById('brisbaneShow');
  let cardBrisbane = document.getElementById('cardBrisbane');
  cardBrisbane.addEventListener('mouseenter', () => {
    // console.log('mouse had been moved in');
    brisbaneShow.classList.add('hidden');
    brisbaneHidden.classList.remove('hidden');
  });
  cardBrisbane.addEventListener('mouseleave', () => {
    // console.log('mouse had been moved out');
    brisbaneShow.classList.remove('hidden');
    brisbaneHidden.classList.add('hidden');
  });
  cardBrisbane.addEventListener('click', () => {
    // console.warn('test');
    // alert('test');
    window.location.href="https://jiangren.com.au/web-development-bootcamp";
  });
}
hideBrisbane();

const hideMelbourne = () => {
  let melbourneHidden = document.getElementById('melbourneHidden');
  let melbourneShow = document.getElementById('melbourneShow');
  let cardMelbourne = document.getElementById('cardMelbourne');
  cardMelbourne.addEventListener('mouseenter', () => {
    melbourneShow.classList.add('hidden');
    melbourneHidden.classList.remove('hidden');
  });
  cardMelbourne.addEventListener('mouseleave', () => {
    melbourneShow.classList.remove('hidden');
    melbourneHidden.classList.add('hidden');
  });
  cardMelbourne.addEventListener('click', () => {
    window.location.href="https://jiangren.com.au/web-development-bootcamp";
  });
}
hideMelbourne();

const hideUIUX = () => {
  let UIUXHidden = document.getElementById('UIUXHidden');
  let UIUXShow = document.getElementById('UIUXShow');
  let cardUIUX = document.getElementById('cardUIUX');
  cardUIUX.addEventListener('mouseenter', () => {
    UIUXShow.classList.add('hidden');
    UIUXHidden.classList.remove('hidden');
  });
  cardUIUX.addEventListener('mouseleave', () => {
    UIUXShow.classList.remove('hidden');
    UIUXHidden.classList.add('hidden');
  });
  cardUIUX.addEventListener('click', () => {
    window.location.href="https://jiangren.com.au/program-course/ui-design-bootcamp-or-learn-to-design";
  });
}
hideUIUX();

const hideMelbourne2 = () => {
  let melbourne2Hidden = document.getElementById('melbourne2Hidden');
  let melbourne2Show = document.getElementById('melbourne2Show');
  let cardMelbourne2 = document.getElementById('cardMelbourne2');
  cardMelbourne2.addEventListener('mouseenter', () => {
    melbourne2Show.classList.add('hidden');
    melbourne2Hidden.classList.remove('hidden');
  });
  cardMelbourne2.addEventListener('mouseleave', () => {
    melbourne2Show.classList.remove('hidden');
    melbourne2Hidden.classList.add('hidden');
  });
  cardMelbourne2.addEventListener('click', () => {
    window.location.href="https://jiangren.com.au/program-course/data-analyst-power-bi-python-excel";
  });
}
hideMelbourne2();