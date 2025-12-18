<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Here you might want to filter orders for the authenticated user
        // For simplicity, showing all orders. Add auth middleware to protect.
        return Order::with('products')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'shipping_address' => 'required|string|max:255',
            'recipient_phone' => 'required|string|max:255',
            'payment_method' => 'required|string|max:255',
            'notes' => 'nullable|string',
            'products' => 'required|array',
            'products.*.product_id' => 'required|exists:products,id',
            'products.*.quantity' => 'required|integer|min:1',
        ]);

        $order = Order::create([
            'user_id' => Auth::id(), // Assumes user is authenticated
            'shipping_address' => $request->shipping_address,
            'recipient_phone' => $request->recipient_phone,
            'payment_method' => $request->payment_method,
            'notes' => $request->notes,
        ]);

        foreach ($request->products as $product) {
            $order->products()->attach($product['product_id'], ['quantity' => $product['quantity']]);
        }

        return response()->json($order->load('products'), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        // Add authorization check if needed, e.g., Gate::authorize('view', $order);
        return $order->load('products');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        // Add authorization check if needed
        $request->validate([
            'shipping_address' => 'string|max:255',
            'recipient_phone' => 'string|max:255',
            'payment_method' => 'string|max:255',
            'status' => 'string|max:255',
            'notes' => 'nullable|string',
            'products' => 'array',
            'products.*.product_id' => 'exists:products,id',
            'products.*.quantity' => 'integer|min:1',
        ]);

        $order->update($request->only(['shipping_address', 'recipient_phone', 'payment_method', 'status', 'notes']));

        if ($request->has('products')) {
            $productData = [];
            foreach ($request->products as $product) {
                $productData[$product['product_id']] = ['quantity' => $product['quantity']];
            }
            $order->products()->sync($productData);
        }


        return response()->json($order->load('products'), 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        // Add authorization check if needed
        $order->delete();

        return response()->json(null, 204);
    }
}