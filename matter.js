// 创建一个物理引擎
const engine = Matter.Engine.create();
engine.gravity.y = 9.8; // 设置重力

// 创建一个渲染器
const render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        pixelRatio: 1,
        background: '#fafafa',
        wireframes: true, // 设置为true以显示线框模式
    }
});

// 创建一个方块和一个地面
const box = Matter.Bodies.rectangle(400, 200, 80, 80);
const ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// 将它们添加到物理引擎中
Matter.Composite.add(engine.world, [box, ground]);

// 运行渲染器
Matter.Render.run(render);

// 创建一个运行环境，类似于Unity3D的Update函数
const runner = Matter.Runner.create();
Matter.Runner.run(runner, engine);
