// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


string libro = "el programador pragmatico";

/* int entero = 100;
float decimal = 1.967857F; */

bool autorizado = true;
bool seleccionado = false;

//array
int[] numeros = {23, 45, 16, 37, 3, 99, 22};
Console.WriteLine(numeros[0]); 

//lista
List<int> numeross = new List<int> {23, 45, 16, 37, 3, 99, 22};
Console.WriteLine(numeross[0]); 
//imprimir toda la lista
Console.WriteLine(string.Join(",",numeross)); 