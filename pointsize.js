AFRAME.registerComponent('custom-points', {
            schema: {
                size: { type: 'number', default: 1.0 }
            },
            init: function () {
                const data = this.data;
                const el = this.el;
                el.addEventListener('model-loaded', () => {
                    const object = el.getObject3D('mesh');
                    object.traverse((node) => {
                        if (node.isPoints) {
                            node.material.size = data.size;
                            node.material.needsUpdate = true;
                        }
                    });
                });
            }
        });
