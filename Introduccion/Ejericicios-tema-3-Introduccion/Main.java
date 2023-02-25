public class Main {

  public static void main(String[] args) {
    int resultado = suma(1, 2, 3);
    System.out.printf("Resultado de la suma: %d\n", resultado); // Como no dice si mostrar o no, decidí mostrar el resultado
    Coche miCoche = new Coche();
    miCoche.aumentarPuerta();
    System.out.printf("Numero de puertas que tiene el coche: %d\n", miCoche.numeroPuertas);
  }

  // Primera parte:
  // Crear una función con tres parámetros que sean números que se suman entre sí.
  // Llamar a la función en el main y darle valores.
  public static int suma(int a, int b, int c) {
    return a + b + c;
  }
}
