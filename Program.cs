using System;
class Program
{
   static void Main()
   {
      Console.WriteLine("Please enter the Number:");
      int n = Convert.ToInt32(Console.ReadLine());
      bool isPrime = true;

      for (int i = 2; i < n; i++)
      {
         if (n % i == 0)
         {
            isPrime = false;
            break;
         }
      }

      if (isPrime && n > 1)
         Console.WriteLine("Prime");
      else
         Console.WriteLine("Not Prime");
   }
}