// See https://aka.ms/new-console-template for more information

//FirstApp();
//static void FirstApp()
//{
//    string askName = "Name: ";

//    Console.Write(askName);
//    string? name = Console.ReadLine();
//    // int age = Convert.ToInt32(Console.ReadLine());
//    Console.WriteLine($"Yo, {name}");

//    Console.WriteLine();
//}


//int[] nums = new int[4];

string[] people = { "Tom", "Sam", "Bob" };
DescTextArray(people);

static void DescTextArray(string[] textArray)
{
    for (int i = textArray.Length - 1; i >= 0; i--)
    {
        Console.WriteLine(textArray[i]);
    }
}
//Console.WriteLine(people.Length);



//int aa = 33;
//int bb = 600;
//byte cc = ((byte)(aa + bb));
//Console.WriteLine(cc);

//try
//{
//    int a = 33;
//    int b = 600;
//    byte c = checked((byte)(a + b));
//    Console.WriteLine(c);
//}
//catch (OverflowException ex)
//{
//    Console.WriteLine(ex.Message);
//}

//for (int i = 1; i < 10; i++)
//{
//    for (int j = 1; j < 10; j++)
//    {
//        Console.Write($"{i * j} \t");
//    }
//    Console.WriteLine();
//}