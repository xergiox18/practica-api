import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const lastName = formData.get("lastName") as string;
    const number = formData.get("number") as string;
    const image = formData.get("image") as File | null;

    console.log("Datos recibidos:", { name, lastName, number });

    if (image) {
      console.log("Nombre del archivo:", image.name);
      console.log("Tipo MIME:", image.type);
      console.log("Tamaño:", image.size);

      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
    }

    return NextResponse.json({
      success: true,
      data: { name, lastName, number, image: image?.name || null },
    });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      { success: false, error: "Error processing request" },
      { status: 500 }
    );
  }
}
