for(var i=0;i<1000;i=i+100)
            {
                for(var j=i;j<1000;j=j+100)
                {
                    var circle=new Path.Circle(new Point(i,j),5);
                    circle.fillcolor='black';
                }
            }