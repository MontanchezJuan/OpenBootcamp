public class Main {

    public static void main(String[] args) {
        Cliente cliente = new Cliente();

        cliente.setEdad(70);
        cliente.setNombre("Tomas Antonio");
        cliente.setTelefono("3008866223");
        cliente.setCredito(true);
        System.out.printf("El cliente de nombre %s con %d años, tiene el siguiente numero de telefono: %s\n",
                cliente.getNombre(), cliente.getEdad(), cliente.getTelefono());
        if (cliente.getCredito() == true) {
            System.out.println("Tiene credito");
        } else {
            System.out.println("No tiene credito");
        }

        Trabajador trabajador = new Trabajador();

        trabajador.setEdad(28);
        trabajador.setNombre("Marcos Banderas");
        trabajador.setTelefono("3018866223");
        trabajador.setSalario(1000);
        System.out.printf("El trabajador de nombre %s con %d años, tiene el siguiente numero de telefono: %s\n",
                trabajador.getNombre(), trabajador.getEdad(), trabajador.getTelefono());
        if (trabajador.getSalario() > 0.0) {
            System.out.println("Su salario es: " + trabajador.getSalario());
        } else {
            System.out.println("No tiene salario");
        }
    }
}
