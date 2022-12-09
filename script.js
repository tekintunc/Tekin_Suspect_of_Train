random= Math.floor(Math.random()*10)+1;
 
while(1)
{
  sayi= prompt('Sence suçlu 10 vagonlu bu trende hangi vagonda ?');
   if (sayi>random)
   alert('Daha aşağıdaki vagonlardan birinde');

   else if (sayi<random)
   alert('Daha yukarıdaki vagonlardan birinde');

   else if (sayi==random){
  alert('Bravo, Suçluyu yakaladınız'); break;
}

}
 