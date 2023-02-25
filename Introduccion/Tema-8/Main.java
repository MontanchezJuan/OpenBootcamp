public class Main {

    public static void main(String[] args) {
        // Crear un objeto persona en el main.
        Persona persona = new Persona();

        // Utiliza los gets y sets para darle valores a las propiedades edad, nombre y
        // telefono, por último muéstralas por consola.
        persona.setEdad(70);
        persona.setNombre("Tomas Antonio");
        persona.setTelefono("3008866223");
        System.out.printf("La persona de nombre %s con %d años, tiene el siguiente numero de telefono: %s\n",
                persona.getNombre(), persona.getEdad(), persona.getTelefono());
    }
}
