﻿namespace MobilityMatters.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'MobilityMatters.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

