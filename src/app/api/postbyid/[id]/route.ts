import { NextRequest } from 'next/server';

// API route handler for fetching posts by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`);
    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: data.message || 'Failed to fetch post' },
        { status: response.status }
      );
    }

    return Response.json(data);
  } catch (error) {
    console.error('Error fetching post:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
