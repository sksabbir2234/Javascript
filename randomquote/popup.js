// Get elements from the DOM
const generateButton = document.getElementById('generate');
const popupBox = document.getElementById('popup-box');
const quoteText = document.getElementById('quote');
const closeButton = document.getElementById('close');

// Array of quotes
const quotes = [
  'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
  'The way to get started is to quit talking and begin doing. -Walt Disney',
  'Your time is limited, don’t waste it living someone else’s life. -Steve Jobs',
  'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',
  'Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa',
  'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. -Oprah Winfrey',
  'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
  'I have learned over the years that when one’s mind is made up, this diminishes fear. -Rosa Parks',
  'I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. -Jimmy Dean',
  'Believe you can and you’re halfway there. -Theodore Roosevelt',
  'It does not matter how slowly you go as long as you do not stop. -Confucius',
  'Too many of us are not living our dreams because we are living our fears. -Les Brown',
  'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. -Leonardo da Vinci',
  'The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. -Steve Jobs',
  'You miss 100% of the shots you don’t take. -Wayne Gretzky',
  'If you want to live a happy life, tie it to a goal, not to people or things. -Albert Einstein',
  'The best way to predict the future is to invent it. -Alan Kay',
  'The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson',
  'You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground. -Unknown',
  'Verily, after hardship comes ease. (Surah Ash-Sharh 94:5-6)',
  'Allah does not burden a soul beyond that it can bear. (Surah Al-Baqarah 2:286)',
  'So, verily, with every difficulty, there is relief. (Surah Ash-Sharh 94:5)',
  'And He has made me blessed wherever I am. (Surah Maryam 19:31)',
  'And We have not sent you except as a mercy to mankind. (Surah Al-Anbiya 21:107)',
  'And whosoever fears Allah and keeps his duty to Him, He will make a way for him to get out (from every difficulty). (Surah At-Talaq 65:2-3)',
  'And whoever puts all his trust in Allah (SWT), He will be enough for him. (Surah At-Talaq 65:3)',
  'And never give up hope of Allah’s Mercy. Certainly, no one despairs of Allah’s Mercy, except the people who disbelieve. (Surah Yusuf 12:87)',
  'Verily, Allah does not change the condition of a people until they change what is in themselves. (Surah Ar-Ra’d 13:11)',
  'And the servants of Allah, those who walk on the earth in humility and calmness, and when the foolish address them (with bad words) they reply back with mild words of gentleness. (Surah Al-Furqan 25:63)',
  'And when My slaves ask you (O Muhammad SAW) concerning Me, then (answer them), I am indeed near (to them by My Knowledge). I respond to the invocations of the supplicant when he calls on Me (without any mediator or intercessor). So let them obey Me and believe in Me, so that they may be led aright. (Surah Al-Baqarah 2:186)',
  'O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient. (Surah Al-Baqarah 2:153)',
  'And do not think that those who are killed in the cause of Allah are dead. Rather, they are alive with their Lord, receiving provision. (Surah Al-Imran 3:169)',
  'And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient, (Surah Al-Baqarah 2:155)',
  'Indeed, those who have said, "Our Lord is Allah " and then remained on a right course - the angels will descend upon them, [saying], "Do not fear and do not grieve but receive good tidings of Paradise, which you were promised. (Surah Fussilat 41:30)',
  'And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah ] (Surah Al-Baqarah 2:45)',
  'And whoever is conscious of Allah , He will make for him a way out. (Surah At-Talaq 65:2)',
  'Say, "O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah . Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful." (Surah Az-Zumar 39:53)',
  'And when My servants ask you, [O Muhammad], concerning Me - indeed I am near. I respond to the invocation of the supplicant when he calls upon Me. So let them respond to Me [by obedience] and believe in Me that they may be [rightly] guided. (Surah Al-Baqarah 2:186)',
  'The believing men and believing women are allies of one another. They enjoin what is right and forbid what is wrong and establish prayer and give zakah and obey Allah and His Messenger. Those - Allah will have mercy upon them. Indeed, Allah is Exalted in Might and Wise. (Surah At-Tawbah 9:71)'


  
];

// Generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote;
  popupBox.style.display = 'block';
}

// Close the popup box
function closePopup() {
  popupBox.style.display = 'none';
}

// Event listeners
generateButton.addEventListener('click', generateQuote);
closeButton.addEventListener('click', closePopup);

// Close the popup box if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (event.target === popupBox) {
    closePopup();
  }
});
