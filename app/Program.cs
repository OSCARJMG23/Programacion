// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


string libro = "el programador pragmatico";

int entero = 100;
float numDecimal = 1.967857F; 

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

string[] animales = {"perro", "gato", "tigre"};

dynamic[] datosMixtos = {"texto", 69, true};


Dictionary<int,string> jugadores = new Dictionary<int, string>();
jugadores.Add(10, "Messi");
jugadores.Add(7, "Cristiano Ronaldo");
Console.WriteLine(jugadores[7]); 


Dictionary<string,string> paises = new Dictionary<string, string>();
paises.Add("EC","Ecuador");
paises.Add("MX","Mexico");
paises.Add("AR", "Argentina");


Dictionary<string,string[]> emails = new Dictionary<string, string[]>();
string[] emailsJuan = {"juan@gmail.com"};
emails.Add("Juan", emailsJuan);
string[] emailsRicardo = {"ricardo@gmail.com", "ricardo@hotmail.com"};
emails.Add("Ricardo", emailsRicardo);